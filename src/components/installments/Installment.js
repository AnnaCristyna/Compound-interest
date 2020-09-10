import React from 'react';
import css from './installment.module.css';
import { formatNumber, formatPercent } from '../../helpers/FormatNumber';

export default function Installment({ perPeriods }) {
  let style;
  let icons;
  return (
    <div className={css.container}>
      {perPeriods.map((period) => {
        const { id, amount, difference, rate } = period;
        if (difference < 0) {
          style = css.negative;
          icons = 'trending_down';
        } else {
          style = css.positive;
          icons = 'trending_up';
        }
        return (
          <div className={`${css.child} ${style}`} key={id}>
            <i className=" medium material-icons">{icons}</i>
            <div className={css.content}>
              <span> {formatNumber(amount)} </span>
              <span>{formatNumber(difference)} </span>
              <span>{formatPercent(rate)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
