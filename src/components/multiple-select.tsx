import React from 'react'
import { createListCollection, Portal, Select } from '@chakra-ui/react'

interface Collection {
    label: string
    value: string
}

interface MultipleSelectProps {
    title: string
    selections: Collection[]
}

const MultipleSelect = ({selections, title}: MultipleSelectProps)  => {

    const frameworks = createListCollection({
        items: selections
      })
      
  return (
    <Select.Root multiple collection={frameworks}>
        <Select.HiddenSelect/>
        <Select.Label style={{fontSize: "18px", fontWeight:"bold", color: "#646464", marginBottom: "12px"}}>
            <span>
                {title}
            </span>
        </Select.Label>
        <Select.Control >
            <Select.Trigger width="600px" height="40px"  border="1px solid #BEBEBE" cursor="pointer">
            <Select.ValueText marginLeft="10px"  placeholder="Selects Description" />
            </Select.Trigger>
            <Select.IndicatorGroup>
            <Select.Indicator  marginRight="10px"/>
            </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
            <Select.Positioner >
            <Select.Content padding="8px" fontSize="16px" color="#464646">
                {frameworks.items.map((framework) => (
                <Select.Item item={framework} key={framework.value} padding="8px" borderRadius="4px" cursor="pointer">
                    {framework.label}
                    <Select.ItemIndicator />
                </Select.Item>
                ))}
            </Select.Content>
            </Select.Positioner>
        </Portal>
    </Select.Root>
  )
}



export default MultipleSelect