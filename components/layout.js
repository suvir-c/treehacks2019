import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'blockstack-ui';

import Nav from './nav';
import Footer from './footer';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    useContainer: PropTypes.bool,
    blogAttrs: PropTypes.object,
  }

  static defaultProps = {
    useContainer: true,
    blogAttrs: null,
  }

  render() {
    const { children, useContainer, blogAttrs } = this.props;
    const width = useContainer ? [1, 0.9] : 1;
    const mx = useContainer ? [2, 8] : 0;
    return (
      <div>
        <Nav blogAttrs={blogAttrs} />
        <Flex>
          <Box width={width} mt={useContainer ? 6 : 2} mx={mx}>
            {children}
          </Box>
        </Flex>
        <Footer />
      </div>
    );
  }
}
