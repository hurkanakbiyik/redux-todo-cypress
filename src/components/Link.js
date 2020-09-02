import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick, hookName }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
       data-hook={hookName}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  hookName: PropTypes.string
}

export default Link
