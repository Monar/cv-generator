import nunjucks from 'nunjucks';

import './base.scss';
import './template.scss';
import temp from './template.html';

import data from './cv.yaml';
import photo from './photo.jpg';


nunjucks.configure({ autoescape: true });

data.photo = photo;
const html = temp.render(data);

const wrapper = document.createElement('div');
wrapper.id = 'paper';
wrapper.innerHTML = html;

document.body.appendChild(wrapper);
