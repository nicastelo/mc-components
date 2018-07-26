import { map, isEmpty } from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const styles = {
  table: {
    width: '100%',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderCollapse: 'collapse',
    fontFamily: 'sans-serif',
    fontSize: '12px',
    textAlign: 'left',
  },
  row: {
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  },
  cell: {
    padding: '5px 10px',
    fontWeight: 300,
  },
}

styles.header = {
  ...styles.cell,
  fontWeight: 600,
}


export default class PropsTable extends PureComponent {
  static propTypes = {
    component: PropTypes.func,
  }

  static defaultProps = {
    component: {},
  }

  render () {
    const { component: { props } } = this.props

    if (!props) {
      return null
    }

    return (
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Type</th>
            <th style={styles.header}>Req?</th>
            <th style={styles.header}>Def</th>
          </tr>
        </thead>

        <tbody>
          {map(props, (prop, key) =>
              <tr key={key} style={styles.row}>
                <th style={styles.header}>{key}</th>
                <td style={styles.cell}>{prop.type.name}</td>
                <td style={styles.cell}>
                  {prop.required
                    ? 'true'
                    : '-'}
                </td>
                <td style={styles.cell}>
                  {prop.defaultValue && !isEmpty(prop.defaultValue.value)
                    ? prop.defaultValue.value
                    : '-'}
                </td>
              </tr>,
          )}
        </tbody>
      </table>
    )
  }
}