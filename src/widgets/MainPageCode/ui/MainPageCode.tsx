import {ChangeEvent, FormEventHandler, useState} from 'react';

import {Flex, Input, Link, Text} from "@chakra-ui/react";

import {NavLink} from "react-router-dom";

import {pages} from "./MainPageCode.constants.ts";
import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows} from "@entities/code";
import {CodeLoading} from "@shared/ui/loading";


export const MainPageCode = () => {
    const [value, setValue] = useState<string>("npm run dev");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleStopLoading = () => {
        setIsLoading(false);
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (value.startsWith("<script>alert")) {
            alert("xss not allowed");
        }
        setIsOpen(true);
    }

    return (
        <CodeContainer>
            <CodeIndexesRange startIndex={1} length={20}/>
            <CodeRows>
                <CodeRow/>

                <CodeRow>
                    <Flex as="form" onSubmit={handleSubmit} w="100%">
                        <Text
                            fontSize="2xl"
                            color="main.800"
                            mr={3}
                        >
                            {`>>`}
                        </Text>

                        <Input
                            variant="unstyled"
                            value={value}
                            fontSize="2xl"
                            color="main.800"
                            onChange={handleChange}
                        />
                    </Flex>
                </CodeRow>

                <CodeRow/>

                {['code-typing@1.0.0 dev', 'vite'].map((text, index) => (
                    <CodeRow key={index}>
                        <Text
                            fontSize="2xl"
                            color="main.800"
                            mr={3}
                        >
                            {`> ${text}`}
                        </Text>
                    </CodeRow>
                ))}

                <CodeRow/>

                {isLoading ? (
                    <CodeRow>
                        <CodeLoading title={'Loading...'} px={0} onSuccess={handleStopLoading} delay={80}/>
                    </CodeRow>
                ) : (
                    <>
                        <CodeRow>
                            <Text fontSize="xl" color="primary.400" ml={3}>
                                CODE TYPING v1.0.0 ready
                            </Text>
                        </CodeRow>

                        <CodeRow/>

                        <CodeRow>
                            <Text fontSize="xl" color="main.500" ml={3}>
                                Pages:
                            </Text>
                        </CodeRow>

                        {pages.map((page) => (
                            <CodeRow key={page.path}>
                                <Text fontSize="xl" color="main.800">
                                    <Text as="span" color="primary.400" mr={1}>
                                        {`>`}
                                    </Text>

                                    <Text as="span" mr={4}>
                                        {page.title}:
                                    </Text>

                                    <Link
                                        textDecoration="underline"
                                        color="primary.100"
                                        _hover={{color: 'primary.400'}}
                                    >
                                        <NavLink to={page.path}>
                                            {page.path}
                                        </NavLink>
                                    </Link>
                                </Text>
                            </CodeRow>
                        ))}
                    </>
                )}

                {isOpen && (
                    <>
                        <CodeRow/>

                        <CodeRow>
                            <Text fontSize="xl" color="primary.400" ml={6}>
                                You found easter egg! Code Typing developers:
                            </Text>
                        </CodeRow>

                        <CodeRow>
                            <Link fontSize="xl" color="primary.100" href="https://github.com/denischagin"
                                  textDecoration="underline">
                                Frontn't developer
                            </Link>
                        </CodeRow>

                        <CodeRow>
                            <Link fontSize="xl" color="primary.100" href="https://github.com/ttodoshi"
                                  textDecoration="underline">
                                Backn't developer
                            </Link>
                        </CodeRow>
                    </>
                )}
            </CodeRows>
        </CodeContainer>
    )
}