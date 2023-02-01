import Mock from 'mockjs';
import floor from './floor.json';

Mock.mock('/mock/floor', 'GET', { code: 200, data: floor});