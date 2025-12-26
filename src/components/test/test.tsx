"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Download, 
  Share2, 
  ZoomIn,
  ZoomOut,
  X,
  Eye,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

const InteractiveOfferLetter = ({ letterImageSrc = "/images/admit-letter1.jpg" }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 1));
  };

  const handleDownload = () => {
    // Implement download logic
    console.log('Download letter');
  };

  const handleShare = () => {
    // Implement share logic
    console.log('Share letter');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with Actions */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-t-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              Admission Offer Letter
              <span className="inline-flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                APPROVED
              </span>
            </h3>
            <p className="text-sm text-gray-600">University of Toronto</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFullscreen(true)}
            className="p-2 hover:bg-white rounded-lg transition-colors"
            title="View Fullscreen"
          >
            <Eye className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="p-2 hover:bg-white rounded-lg transition-colors"
            title="Download"
          >
            <Download className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="p-2 hover:bg-white rounded-lg transition-colors"
            title="Share"
          >
            <Share2 className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </div>

      {/* Letter Container */}
      <div className="relative bg-white rounded-b-2xl shadow-2xl overflow-hidden">
        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleZoomOut}
            disabled={scale <= 1}
            className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ZoomOut className="w-5 h-5 text-gray-700" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleZoomIn}
            disabled={scale >= 2}
            className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </motion.button>
        </div>

        {/* Letter Image with Zoom */}
        <motion.div 
          className="overflow-auto max-h-[600px] cursor-grab active:cursor-grabbing"
          style={{ 
            touchAction: 'pan-x pan-y',
          }}
        >
          <motion.div
            animate={{ scale }}
            transition={{ duration: 0.3 }}
            className="origin-center"
          >
            <Image
              src={letterImageSrc}
              alt="Admission Offer Letter"
              width={800}
              height={1100}
              className="w-full h-auto"
              draggable={false}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent opacity-50 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-100 to-transparent opacity-50 blur-2xl pointer-events-none"></div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 z-10"
            >
              <X className="w-6 h-6 text-gray-900" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={letterImageSrc}
                alt="Admission Offer Letter - Fullscreen"
                width={1200}
                height={1600}
                className="w-full h-auto"
                priority
              />
            </motion.div>

            {/* Download button in fullscreen */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow-lg flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Letter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-semibold shadow-lg flex items-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Footer */}
      <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Official Admission Offer</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              This is your official admission offer letter from the University of Toronto. 
              You can download, print, or share this document. Keep it safe as you&apos;ll need it for visa applications.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                <CheckCircle className="w-3 h-3 text-green-500" />
                Verified
              </span>
              <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                <CheckCircle className="w-3 h-3 text-green-500" />
                Master of Science
              </span>
              <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                <CheckCircle className="w-3 h-3 text-green-500" />
                2 Years Duration
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveOfferLetter;