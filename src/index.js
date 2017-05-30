import nunjucks from 'nunjucks';

import './base.scss';
import './template/index.scss';
import temp from './template/index.html';

import data from '../data/cv.yaml';
import photo from '../data/photo.jpg';


nunjucks.configure({ autoescape: true });

data.photo = photo;
const html = temp.render(data);

const wrapper = document.createElement('div');
wrapper.id = 'paper';
wrapper.innerHTML = html;

document.body.appendChild(wrapper);
