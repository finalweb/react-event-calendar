import React from 'react';
import PropTypes from 'prop-types';
import TextTruncate from 'react-text-truncate';

const CalendarTitle = ({title}) => {
    return (
    <div className="flexColumn">
      <div style={{width: '100%', textAlign: 'center'}}>
        <TextTruncate line={1} truncateText={'-'} text={title} textTruncateChild={null}/>
      </div>
    </div>
    )
};

CalendarTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CalendarTitle;
