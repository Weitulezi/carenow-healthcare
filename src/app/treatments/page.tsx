"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Flex, For, Table } from "@chakra-ui/react";
import TextInput from "@/components/text-input";
import { User } from "lucide-react";

interface TreatmentInterface {
  treatment_id: number;
  user_id: number;
  name: string;
  cost: string;
  schedule: string;
  createdAt: string;
  updatedAt: string;
}

const Page = () => {
  const [treatmentList, setTreatmentList] = useState<TreatmentInterface[]>([]);
  const [nameParam, setNameParam] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/treatments?name=${nameParam}`)
      .then((res) => res.json())
      .then((data) => {
        setTreatmentList(data);
      });
  }, [nameParam]);

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(nameInput);
    setNameParam(nameInput);
  };

  return (
    <Box
      width={["100%", "100%", "100%", "1400px"]}
      margin="40px auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      height={["fit-content", "fit-content", "fit-content", "fit-content"]}
    >
      <Flex
        w={["90%", "1400px", "1400px", "1400px"]}
        justifyContent={"start"}
        mb={"20px"}
      >
        <Box
          onSubmit={(e) => handleSubmit(e)}
          as="form"
          width={"100%"}
          display={"flex"}
          gap={"14px"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <TextInput
            required={false}
            type="text"
            title="patient name"
            state={nameInput}
            setState={setNameInput}
            LabelIcon={User}
          />
          <Button
            type="submit"
            width="fit-content"
            paddingX="12px"
            height="34px"
            placeSelf="end"
            borderRadius="6px"
            bg="#FF6889"
            fontSize="16px"
            fontWeight="semibold"
            shadow="lg"
          >
            Submit
          </Button>
        </Box>
      </Flex>
      <Table.ScrollArea
        borderWidth="1px"
        w={["90%", "1400px", "1400px", "1400px"]}
      >
        <Table.Root variant={"outline"} size={"sm"} fontSize={"18px"}>
          <Table.Header backgroundColor={"rgb(242,242,242)"}>
            <Table.Row boxSize={"10"}>
              <Table.ColumnHeader
                minW={["60px", "80px", "80px", "80px"]}
                padding={"0px 10px"}
                fontWeight={"bold"}
              >
                ID
              </Table.ColumnHeader>
              <Table.ColumnHeader
                minW={["160px", "400px", "400px", "400px"]}
                padding={"0px 10px"}
                fontWeight={"bold"}
              >
                Name
              </Table.ColumnHeader>
              <Table.ColumnHeader
                minW={["160px", "400px", "400px", "400px"]}
                padding={"0px 10px"}
                fontWeight={"bold"}
              >
                Cost
              </Table.ColumnHeader>
              <Table.ColumnHeader
                minW={["160px", "400px", "400px", "400px"]}
                padding={"0px 10px"}
                fontWeight={"bold"}
                textAlign="end"
              >
                Schedule
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {treatmentList.map((item) => (
              <Table.Row boxSize={"12"} key={item.treatment_id}>
                <Table.Cell
                  padding={"0px 10px"}
                  color="rgb(90,90,90)"
                  fontWeight="bold"
                >
                  {item.treatment_id}
                </Table.Cell>
                <Table.Cell
                  padding={"0px 10px"}
                  color="rgb(90,90,90)"
                  fontWeight="bold"
                >
                  {item.name}
                </Table.Cell>
                <Table.Cell maxWidth={"10px"} padding={"0px 10px"}>
                  <span
                    style={{
                      display: "flex",
                      width: "fit-content",
                      backgroundColor: "#dfffd1",
                      color: "#008015",
                      fontWeight: "bolder",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    Rp. {item.cost}
                  </span>
                </Table.Cell>
                <Table.Cell padding={"0px 10px"} textAlign="end">
                  {new Date(item.schedule).toDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </Box>
  );
};

export default Page;
