import { useEffect, useState } from 'react';

import type { ProcessedVideo } from './common/interfaces';
import { getVideos } from './services/videos';
import { Button } from './components/button';
import styles from './app.module.css';
import { MainContent } from './components/main-content';
import { AddVideoContent } from './components/add-video';

export const App = () => {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);
  const [filterValue, setFilterValue] = useState('');
  const [content, setContent] = useState<'main' | 'add-video'>('main');

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  const handleAddVideo = (newVideo: ProcessedVideo) => {
    setVideos([...videos, newVideo]);
  };

  const handleDeleteVideo = (id: number) => {
    // Using a simple JS confirm() to confirm deletion
    // eslint-disable-next-line no-restricted-globals
    const confirmation = confirm('Are you sure you want to delete this video?');
    if (!confirmation) return;

    const filteredVideos = [...videos.filter((video) => video.id !== id)];
    setVideos(filteredVideos);
  };

  const filteredVideos = videos.filter(
    (video) =>
      // Will filter by name and author
      video.name.toLowerCase().includes(filterValue.toLowerCase()) || video.author.toLowerCase().includes(filterValue.toLowerCase())
  );
  const authors = videos.map((video) => video.author).filter((value, index, self) => self.indexOf(value) === index);

  return (
    <>
      <header className={styles.header}>
        Videos
        <Button onClick={() => setContent('add-video')} primary>
          Add video
        </Button>
      </header>

      <main className={styles.main}>
        {/* Only rendering components conditionally for the purpose of test,
        a proper Router would be preferred here in a real life example */}
        {content === 'main' ? (
          <MainContent onVideoDelete={handleDeleteVideo} videos={filteredVideos} setFilterValue={setFilterValue} />
        ) : (
          <AddVideoContent authors={authors} addVideo={handleAddVideo} onReturn={() => setContent('main')} />
        )}
      </main>

      <footer className={styles.footer}>VManager Demo v0.0.1</footer>
    </>
  );
};
