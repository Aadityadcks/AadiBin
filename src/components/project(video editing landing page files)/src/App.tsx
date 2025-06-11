import React, { useState, useRef } from 'react';
import { Upload, Video, ArrowRight, Plus, Eye, Play, Pause } from 'lucide-react';

interface WorkItem {
  id: number;
  beforeVideo: string;
  afterVideo: string;
  timestamp: string;
  title: string;
}

function App() {
  const [beforeVideo, setBeforeVideo] = useState<string | null>(null);
  const [afterVideo, setAfterVideo] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState<WorkItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  
  const beforeInputRef = useRef<HTMLInputElement>(null);
  const afterInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (file: File, type: 'before' | 'after') => {
    const url = URL.createObjectURL(file);
    if (type === 'before') {
      setBeforeVideo(url);
    } else {
      setAfterVideo(url);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (file) {
      handleVideoUpload(file, type);
    }
  };

  const handleDrop = (e: React.DragEvent, type: 'before' | 'after') => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      handleVideoUpload(file, type);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const publishWork = async () => {
    if (!beforeVideo || !afterVideo || !projectTitle.trim()) return;
    
    setIsUploading(true);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newWork: WorkItem = {
      id: portfolio.length + 1,
      beforeVideo,
      afterVideo,
      title: projectTitle.trim(),
      timestamp: new Date().toLocaleDateString()
    };
    
    setPortfolio(prev => [newWork, ...prev]);
    setBeforeVideo(null);
    setAfterVideo(null);
    setProjectTitle('');
    setIsUploading(false);
    
    // Reset file inputs
    if (beforeInputRef.current) beforeInputRef.current.value = '';
    if (afterInputRef.current) afterInputRef.current.value = '';
  };

  const VideoPlayer = ({ src, className = "" }: { src: string; className?: string }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    return (
      <div className={`relative group ${className}`}>
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover rounded-lg"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-lg"
          onClick={togglePlay}
        >
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-gray-800" />
            ) : (
              <Play className="w-6 h-6 text-gray-800 ml-1" />
            )}
          </div>
        </div>
      </div>
    );
  };

  const UploadArea = ({ 
    type, 
    video, 
    onFileSelect, 
    inputRef 
  }: { 
    type: 'before' | 'after';
    video: string | null;
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
  }) => (
    <div className="relative">
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer group
          ${video 
            ? 'border-green-500/50 bg-green-500/5' 
            : 'border-gray-600 hover:border-purple-500/50 hover:bg-purple-500/5'
          }`}
        onDrop={(e) => handleDrop(e, type)}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          onChange={onFileSelect}
          className="hidden"
        />
        
        {video ? (
          <div className="space-y-4">
            <VideoPlayer src={video} className="w-full h-48" />
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Video uploaded</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Upload {type === 'before' ? 'Raw' : 'Edited'} Video
              </h3>
              <p className="text-gray-400 text-sm">
                Drag and drop or <span className="text-purple-400">click to browse</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Supports MP4, MOV, AVI, WebM
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute -top-3 left-4 bg-gray-800 px-3 py-1 rounded-full">
        <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
          {type === 'before' ? 'Raw Footage' : 'Final Edit'}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Video Editor
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform raw footage into cinematic masterpieces. Showcase your video editing skills with stunning before and after comparisons.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="bg-gray-800/50 px-3 py-1 rounded-full">Color Grading</span>
              <span className="bg-gray-800/50 px-3 py-1 rounded-full">Motion Graphics</span>
              <span className="bg-gray-800/50 px-3 py-1 rounded-full">Sound Design</span>
              <span className="bg-gray-800/50 px-3 py-1 rounded-full">Visual Effects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <UploadArea
              type="before"
              video={beforeVideo}
              onFileSelect={(e) => handleFileSelect(e, 'before')}
              inputRef={beforeInputRef}
            />
            
            <UploadArea
              type="after"
              video={afterVideo}
              onFileSelect={(e) => handleFileSelect(e, 'after')}
              inputRef={afterInputRef}
            />
          </div>

          {/* Project Title Input */}
          {(beforeVideo || afterVideo) && (
            <div className="mb-8">
              <div className="max-w-md mx-auto">
                <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Title
                </label>
                <input
                  id="projectTitle"
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="Enter project name..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Publish Button */}
          {beforeVideo && afterVideo && projectTitle.trim() && (
            <div className="text-center">
              <button
                onClick={publishWork}
                disabled={isUploading}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span>Add to Portfolio</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Portfolio Gallery */}
      {portfolio.length > 0 && (
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Video Portfolio
              </h2>
              <p className="text-gray-400 text-lg">
                Showcasing {portfolio.length} professional edit{portfolio.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {portfolio.map((work) => (
                <div
                  key={work.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold py-1 px-3 rounded-full">
                      #{work.id.toString().padStart(3, '0')}
                    </div>
                    <span className="text-gray-400 text-sm">{work.timestamp}</span>
                  </div>

                  <h3 className="text-white font-semibold mb-4 truncate">{work.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-300 text-xs font-medium uppercase tracking-wide mb-2">Raw Footage</h4>
                      <VideoPlayer src={work.beforeVideo} className="w-full h-32" />
                    </div>
                    
                    <div className="flex justify-center">
                      <ArrowRight className="w-5 h-5 text-gray-500" />
                    </div>
                    
                    <div>
                      <h4 className="text-gray-300 text-xs font-medium uppercase tracking-wide mb-2">Final Edit</h4>
                      <VideoPlayer src={work.afterVideo} className="w-full h-32" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to Transform Your Videos?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional video editing services that bring your vision to life. From raw footage to polished masterpieces.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mt-8">
              <span>4K Resolution Support</span>
              <span>•</span>
              <span>Color Correction</span>
              <span>•</span>
              <span>Audio Enhancement</span>
              <span>•</span>
              <span>Motion Graphics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;