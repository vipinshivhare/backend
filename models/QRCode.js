const mongoose = require('mongoose');
const qrCodeSchema = new mongoose.Schema({
  qrCodeImage: Buffer
});

const QRCodeSchema = mongoose.model('QRCode', qrCodeSchema);

module.exports = { QRCodeSchema };