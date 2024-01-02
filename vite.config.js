import path from 'node:path';
import { resolve } from 'path';
import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';

export default {
  plugins: [
    legacy(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'views/about.html'),
        blog: resolve(__dirname, 'views/blog.html'),
        blogs: resolve(__dirname, 'views/blogs.html'),
        contactus: resolve(__dirname, 'views/contactus.html'),
        course: resolve(__dirname, 'views/course.html'),
        courses: resolve(__dirname, 'views/courses.html'),
        padcast: resolve(__dirname, 'views/padcast.html'),
        padcasts: resolve(__dirname, 'views/padcasts.html'),
        video: resolve(__dirname, 'views/video.html'),
      },
    },
  },
};