import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, SkipBack, SkipForward, Volume2, Star, BookOpen, Clock, User } from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
}

export function NovelDetail() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Mock data - In a real app, this would come from an API
  const novel = {
    id: parseInt(id || '1'),
    title: 'รักในวันฝนพรำ',
    author: 'ฝนพราว',
    cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
    rating: 4.5,
    category: 'นิยายรัก',
    description: `เรื่องราวความรักที่เริ่มต้นในวันฝนพรำ ระหว่างสาวน้อยผู้หลงใหลในสายฝนและหนุ่มนักดนตรีที่มีความฝันอันยิ่งใหญ่ 
    พวกเขาได้พบกันโดยบังเอิญใต้ชายคาเดียวกันในวันที่ฝนตกหนัก และนั่นคือจุดเริ่มต้นของความรักที่งดงาม แต่ก็ต้องฝ่าฟันอุปสรรคมากมาย`,
    totalChapters: 45,
    totalDuration: '15 ชั่วโมง 30 นาที',
    views: 12500,
    chapters: [
      {
        id: 1,
        title: 'บทที่ 1: วันที่ฝนพรำ',
        duration: '20:30',
        audioUrl: 'https://example.com/chapter1.mp3'
      },
      {
        id: 2,
        title: 'บทที่ 2: ความบังเอิญใต้ชายคา',
        duration: '22:15',
        audioUrl: 'https://example.com/chapter2.mp3'
      },
      {
        id: 3,
        title: 'บทที่ 3: เสียงเพลงในสายฝน',
        duration: '19:45',
        audioUrl: 'https://example.com/chapter3.mp3'
      }
    ]
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Novel Info */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={novel.cover}
                alt={novel.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{novel.title}</h1>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {novel.category}
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <User className="h-5 w-5 mr-2" />
                <span>{novel.author}</span>
              </div>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{novel.rating}/5.0</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-1" />
                  <span>{novel.totalChapters} ตอน</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{novel.totalDuration}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{novel.description}</p>
            </div>
          </div>

          {/* Audio Player */}
          <div className="bg-gray-900 text-white p-6">
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              src={novel.chapters[currentChapter].audioUrl}
            />
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold">{novel.chapters[currentChapter].title}</h3>
                <p className="text-sm text-gray-400">{novel.author}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                className="p-2 hover:bg-gray-800 rounded-full"
              >
                <SkipBack className="h-6 w-6" />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <button
                onClick={() => setCurrentChapter(Math.min(novel.chapters.length - 1, currentChapter + 1))}
                className="p-2 hover:bg-gray-800 rounded-full"
              >
                <SkipForward className="h-6 w-6" />
              </button>
              <div className="flex-1 flex items-center space-x-2">
                <span className="text-sm">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={audioRef.current?.duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1"
                />
                <span className="text-sm">{novel.chapters[currentChapter].duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">รายการตอน</h2>
          <div className="space-y-4">
            {novel.chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setCurrentChapter(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  currentChapter === index
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{chapter.title}</h3>
                    <p className="text-sm text-gray-500">ความยาว: {chapter.duration}</p>
                  </div>
                  {currentChapter === index && isPlaying && (
                    <div className="text-blue-600">กำลังเล่น</div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}