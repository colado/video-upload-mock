import React, { useState } from 'react';
import { ProcessedVideo } from '../common/interfaces';
import { getRandomDate } from '../common/utils';
import { Button } from './button';

interface VideoFormProps {
  onReturn: () => void;
  addVideo: (newVideo: ProcessedVideo) => void;
  authors: string[];
}

interface VideoData {
  name: string;
  author: string;
  categories: string[];
}

export const AddVideoContent: React.FC<VideoFormProps> = ({ onReturn, addVideo, authors }) => {
  const [formData, setFormData] = useState<VideoData>({
    name: '',
    author: authors[0],
    categories: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectCategories = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categories = [...formData.categories, event.target.value];
    setFormData((prev) => ({ ...prev, categories: categories }));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Actual validation logic would be added here
    if (!formData.author || !formData.categories || !formData.name) return;

    addVideo({
      name: formData.name,
      author: formData.author,
      categories: formData.categories,
      releaseDate: getRandomDate(),
      highestFormat: '1080p',
      // An ID generator would work better here but not needed for the purpose of the test
      id: Math.floor(Math.random() * (1000000 - 7 + 1) + 7),
    });
    onReturn();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Video name
          <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Video name" />
        </label>
      </div>
      <div>
        <label>
          Video author
          <select required name="author" value={formData.author} onChange={handleChange}>
            {authors?.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Video category
          <select
            required
            multiple
            name="categories"
            value={formData.categories}
            onChange={handleSelectCategories}>
            <option value="Comedy">Comedy</option>
            <option value="Criminal">Criminal</option>
            <option value="Drama">Drama</option>
            <option value="Thriller">Thriller</option>
          </select>
        </label>
      </div>
      <div style={{display: 'flex', gap: 8, marginTop: 16}}>
        <Button type="submit">Submit</Button>
        <Button onClick={onReturn} type="button">
          Cancel
        </Button>
      </div>
    </form>
  );
};
