import type { ProcessedVideo } from '../common/interfaces';
import { Button } from './button';
import styles from './videos-table.module.css';

type VideosTableProps = {
  videos: ProcessedVideo[];
  onVideoDelete: (id: number) => void;
};

export const VideosTable = ({ videos, onVideoDelete }: VideosTableProps) => (
  <div className={styles.wrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Video Name</th>
          <th>Author</th>
          <th>Categories</th>
          <th>Highest Quality Format</th>
          <th>Release Date</th>
          <th>Options</th>
        </tr>
      </thead>

      <tbody>
        {videos.map((video) => (
          <tr key={video.id}>
            <td>{video.name}</td>
            <td>{video.author}</td>
            <td>{video.categories.join(', ')}</td>
            <td>{video.highestFormat}</td>
            <td>{video.releaseDate}</td>
            <td>
              <div style={{display: 'flex', gap: 4}}>
              <Button>Edit</Button>
              <Button onClick={() => onVideoDelete(video.id)}>Delete</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
