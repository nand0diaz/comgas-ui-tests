import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { iInstallation, iRegister } from '../../contexts/FormContext/interfaces'

export interface iList {
  items: string[]
}

export const List: React.FC<iList> = ({ items }) => {
  return (
    <VStack pb="24px" display="flex" alignItems="left">
      {items.map((item, idx) => {
        return (
          <ul key={idx}>
            <Box textStyle="subtitle">✔️ {item}</Box>
          </ul>
        )
      })}
    </VStack>
  )
}
