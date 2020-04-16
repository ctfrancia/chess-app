/** @jsx jsx */
import React from 'react';
import { useMonth } from '@datepicker-react/hooks';
import { jsx } from '@emotion/core';
import Day from './Day';

function Month({ year, month, firstDayOfWeek }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek
  });

  return (
    <div>
      <div css={{ textAlign: 'center', margin: '0 0 16px'}}>
        <strong>{monthLabel}</strong>
      </div>
      <div css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        justifyContent: 'center',
        marginBottom: '10px',
        fontSize: '10px'
      }}>
        {weekdayLabels.map(dayLabel => (
          <div css={{ textAlign: 'center' }} key={dayLabel}>
            { dayLabel }
          </div>
        ))}
      </div>
      <div
        css={{
          display: 'grid',
          gridDisplayColumns: 'repeat(7, 1fr)',
          justifyContent: 'center'
        }}>
        { days.map((day, i) => {
          if (typeof day === 'object') {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              >
              </Day>
            )
          }
          return <div key={i} />
        })}
      </div>
    </div>
  );
}

export default Month;