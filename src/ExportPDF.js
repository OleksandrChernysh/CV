import puppeteer from 'puppeteer-core';
import path from 'path';
import process from 'node:process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PDFExporter {
	constructor() {
		// Configuration
		this.executablePath = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
		this.inputPath = path.join(__dirname, '..', 'dist', 'index.html');
		this.outputPath = path.join(__dirname, '..', 'dist', 'CV.pdf');

		this.pdfOptions = {
			format: 'A4',
			printBackground: true,
			margin: { top: '0', right: '0', bottom: '0', left: '0' }
		};
	}

	async initBrowser() {
		console.log(`Launching Brave at ${this.executablePath}...`);
		return await puppeteer.launch({
			executablePath: this.executablePath,
			headless: 'new'
		});
	}

	async generatePDF() {
		let browser = null;

		try {
			browser = await this.initBrowser();
			const page = await browser.newPage();

			const cvUrl = `file://${this.inputPath}`;
			console.log(`Loading CV from ${cvUrl}...`);

			// Wait until there are no more than 0 network connections for at least 500 ms.
			await page.goto(cvUrl, { waitUntil: 'networkidle0' });

			console.log(`Exporting CV to ${this.outputPath}...`);
			await page.pdf({
				path: this.outputPath,
				...this.pdfOptions
			});

			const coverUrl = `file://${path.join(__dirname, '..', 'dist', 'cover.html')}`;
			const coverOutput = path.join(__dirname, '..', 'dist', 'CoverLetter.pdf');

			console.log(`Loading Cover Letter from ${coverUrl}...`);
			await page.goto(coverUrl, { waitUntil: 'networkidle0' });

			console.log(`Exporting Cover Letter to ${coverOutput}...`);
			await page.pdf({
				path: coverOutput,
				...this.pdfOptions
			});

			console.log('✅ PDFs generated successfully!');
		} catch (error) {
			console.error('❌ Error generating PDF:', error);
			process.exit(1);
		} finally {
			if (browser) {
				await browser.close();
			}
		}
	}
}

// Instantiate and run
const exporter = new PDFExporter();
exporter.generatePDF();
