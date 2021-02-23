import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Todo.css';
import { User } from '../User';

export const Todo = ({ title, completed, author }) => (
  <>
    <h4 className="todo-title">
      Task:
      { ' ' }
      { title }
      <br />
      <span
        className={classNames({
          done: completed,
          'in-progress': !completed,
        })}
      >
        { completed ? 'Done' : 'In progress' }
      </span>
    </h4>
    <User {...author} />
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
