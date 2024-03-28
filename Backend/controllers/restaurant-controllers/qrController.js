//imports
const tableModel = require('../../models/tableModel');
const qrcode = require('qrcode');
const fs = require('fs'); // For file system operations

//function to generate QR code
exports.generateQr = async (req, res) => {
    try {
        const { tableNo, restaurantId } = req.body;
        const url = `http://localhost:${process.env.port}/menu/${restaurantId}/${tableNo}`;
        const table = new tableModel({
            restaurantId,
            tableNo,
            url
        });
        await table.save();
        await generateAndDownloadQRCode(res, url, tableNo); 
        return res.status(200).json({ message: 'QR code generated successfully', url });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// function to generate and download QR code
async function generateAndDownloadQRCode(res, urlToEncode, tableNo) {
    try {
        const qrImageData = await qrcode.toFile(`qrcode${tableNo}.png`, urlToEncode);
        console.log('QR code generated successfully!');
        // Sending the file as a response
        res.download(`qrcode${tableNo}.png`);
        //res.sendFile(`qrcode${tableNo}.png`, { root: '.' });
    } catch (err) {
        console.error('Error generating QR code:', err);
        // Handle the error appropriately
    }
};
