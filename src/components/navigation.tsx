import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Navigation = () => {
  return (
    <Box as="div" height="64px" display="flex" justifyContent="center" alignItems="center" backgroundColor="#FF6889" color="white" shadow="lg">
        <Flex width={["90%", "90%", "1400px"]} justify="space-between" alignItems="center">
            <Box>
                <Text as="h2" fontSize={26} fontWeight="bold">
                    CareNow
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Navigation