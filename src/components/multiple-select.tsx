import React, {memo} from 'react'
import { createListCollection, Portal, Select, SelectValueChangeDetails } from '@chakra-ui/react'
import { LucideProps} from 'lucide-react'

interface SelectItemIterface {
    label: string
    value: string
}

interface MultipleSelectProps {
    title: string
    LabelIcon : React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    selections: SelectItemIterface[]
    setState: React.Dispatch<React.SetStateAction<string[]>>
    state: string[]
}

const MultipleSelect = memo(function ({selections, title, LabelIcon, state, setState}: MultipleSelectProps) {
    const frameworks = createListCollection({
        items: selections
    })

    const handleSelection = (details : SelectValueChangeDetails<SelectItemIterface>) => {
        setState([...details.value])
    }
      
    return (
        <Select.Root multiple collection={frameworks} onValueChange={(details: SelectValueChangeDetails<SelectItemIterface>) => handleSelection(details)}>
            <Select.HiddenSelect/>
            <Select.Label display="flex" alignItems="center" gap="6px" fontSize="18px" fontWeight="bold" color="#646464" marginBottom="4px">
                <LabelIcon size={20}/>
                <span>
                    {title}
                </span>
            </Select.Label>
            <Select.Control >
                <Select.Trigger width={["100%","100%", "100%","480px"]} height="40px"  border="1px solid #BEBEBE" cursor="pointer">
                <Select.ValueText marginLeft="10px"  placeholder={`Select ${title}`} />
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
})



export default MultipleSelect