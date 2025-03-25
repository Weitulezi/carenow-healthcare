"use client"


import { Box, createListCollection, Flex, Input, Portal, Select } from '@chakra-ui/react'
import React from 'react'
import MultipleSelect from './multiple-select'

const TreatmentForm = () => {
    const itemsData = [
        { label: "Fever", value: "fever" },
        { label: "Nausea", value: "nausea" },
        { label: "Headache", value: "headache" },
        { label: "Anxious", value: "anxious" },
    ]
    
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
        <Box width="1244px" paddingY="60px">
            <Flex width="full" gap="44px">
                <Box display="flex" flexDir="column" gap="32px">
                    <Box display="flex" flexDirection="column" gap="12px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Patient Name
                            </span>
                        </label>
                        <Input outlineColor="blue.400" outlineWidth="2px" width="600px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE"/>
                    </Box>
                    <Box display="flex" flexDirection="column" gap="12px">
                        <MultipleSelect title={"Description"}selections={itemsData}/>
                    </Box>
                </Box>
                <Box display="flex" flexDir="column" gap="32px">
                    <Box display="flex" flexDirection="column" gap="12px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Prescription
                            </span>
                        </label>
                        <Input width="600px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE" outlineColor="blue.400" outlineWidth="2px" />
                    </Box>
                    <Box display="flex" flexDirection="column" gap="12px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Schedule
                            </span>
                        </label>
                        <Input width="600px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE"outlineColor="blue.400" outlineWidth="2px" />
                    </Box>
                    <Box display="flex" flexDirection="column" gap="12px">
                        <label htmlFor="name" style={{fontSize: "18px", fontWeight:"bold", color: "#646464"}}>
                            <span>
                                Treatment cost
                            </span>
                        </label>
                        <Input width="600px" placeContent="patient name" paddingX="10px" borderRadius="6px" borderColor="#BEBEBE" outlineColor="blue.400" outlineWidth="2px" />
                    </Box>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default TreatmentForm