import React, {memo} from 'react'
import { createListCollection, Portal, Select, SelectValueChangeDetails } from '@chakra-ui/react'
import { LucideProps} from 'lucide-react'

interface SelectItemIterface {
    label: string
    value: string | number
}

interface SelectsInputProps {
    isMultiple: boolean
    title: string
    LabelIcon : React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    selections: SelectItemIterface[]
    setState: React.Dispatch<React.SetStateAction<string[]>>
    state: string[]
}

const SelectsInput = memo(function ({isMultiple, selections, title, LabelIcon, state, setState}: SelectsInputProps) {
    const collections = createListCollection({
        items: selections
    })

    const updateSelection = (details : SelectValueChangeDetails<SelectItemIterface>) => {
        setState([...details.value])
    }
      
    return (
        <Select.Root multiple={isMultiple} value={state} collection={collections} onValueChange={(details: SelectValueChangeDetails<SelectItemIterface>) => updateSelection(details)}>
            <Select.HiddenSelect/>
            <Select.Label display="flex" alignItems="center" gap="6px" fontSize="16px" fontWeight="bold" color="#646464" marginBottom="4px">
                <LabelIcon size={20}/>
                <span>
                    {title}
                </span>
            </Select.Label>
            <Select.Control >
                <Select.Trigger width={["100%","100%", "100%","480px"]} height="40px"  border="1px solid #BEBEBE" cursor="pointer" outlineColor="blue.400" outlineWidth="2px">
                <Select.ValueText marginLeft="10px"  placeholder={`Select ${title}`} />
                </Select.Trigger>
                <Select.IndicatorGroup>
                <Select.Indicator  marginRight="10px"/>
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner >
                <Select.Content padding="8px" fontSize="16px" color="#464646" border="1px solid #bebebe">
                    {collections.items.map((item) => (
                    <Select.Item item={item} key={item.value} padding="8px" borderRadius="4px" cursor="pointer">
                        {item.label}
                        <Select.ItemIndicator />
                    </Select.Item>
                    ))}
                </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
})



export default SelectsInput