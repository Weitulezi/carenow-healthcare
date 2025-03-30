import { Box, Input } from '@chakra-ui/react'
import { LucideProps } from 'lucide-react'
import React from 'react'


interface TextInputProps {
    type: string
    title: string
    LabelIcon : React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    setState: React.Dispatch<React.SetStateAction<string>>
    state: string
}

const TextInput = ({type, title, state, setState, LabelIcon}: TextInputProps) => {
  return (
    <Box display="flex" flexDirection="column" gap="4px" width={["100%","100%", "100%","480px"]} >
        <label htmlFor="name" style={{fontSize: "16px", fontWeight:"bold", color: "#646464", display: 'flex', alignItems: "center", gap: "6px"}}>
            <LabelIcon size={20}/>
            <span>
                {title}
            </span>
        </label>
        <Input required width="full" type={type} outlineColor="blue.400" outlineWidth="2px" placeContent={title} paddingX="10px" borderRadius="6px" borderColor="#BEBEBE" value={state} onChange={e => setState(e.target.value)}/>
    </Box>
  )
}

export default TextInput