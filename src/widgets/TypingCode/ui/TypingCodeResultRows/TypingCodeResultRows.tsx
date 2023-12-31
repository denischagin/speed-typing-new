import {forwardRef} from "react";
import {TypingCodeResultRowsProps} from "@widgets/TypingCode";
import {useResult} from "@entities/results";
import {convertMillisecondsToTime} from "@shared/libs";
import {Flex, Text, Tooltip} from "@chakra-ui/react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip as TooltipChart, XAxis, YAxis} from "recharts";
import {PrintingRow, useCodeErrors} from "@entities/code";

export const TypingCodeResultRows = forwardRef<HTMLDivElement, TypingCodeResultRowsProps>((props, scrollRef) => {
    const {startIndex} = props

    const {result: {resultTime, symbolPerMinute, symbolsPerSecond}} = useResult()
    const chartData = symbolsPerSecond.map((value, index) =>
        ({name: `${index + 1}`, value: value}));
    const {errorsCount} = useCodeErrors()

    const startRows = 10
    const endRows = 17
    return (
        <>
            {Array.from({length: startRows}).map((_, index) => (
                <PrintingRow key={index} text="  " index={startIndex + index}/>
            ))}
            <div ref={scrollRef}/>
            <PrintingRow
                text=""
                textRowElement={(
                    <Tooltip label="symbols per minute">
                        <Flex mr="100px" gap="10px">
                            <Text as="span" fontSize="25px">
                                spm:
                            </Text>

                            <Text as="span" fontSize="25px">
                                {symbolPerMinute?.toFixed(3)}
                            </Text>
                        </Flex>
                    </Tooltip>
                )}
                index={startIndex + startRows + 1}
            />
            <PrintingRow
                text={`time: ${convertMillisecondsToTime(resultTime ?? 0)}`}
                index={startIndex + startRows + 2}
            />

            <PrintingRow
                text=""
                index={startIndex + startRows + 3}
                textRowElement={(
                    <Text fontSize="25px" color="red.200">errors: {errorsCount}</Text>
                )}
            />

            <Flex direction="column" pos="relative">
                {Array.from({length: endRows}).map((_, index) => (
                    <PrintingRow key={index} text="  " index={startIndex + index + startRows + 4}/>
                ))}
                <Flex
                    pos="absolute"
                    top={"30px"}
                    left={"80px"}
                    h="300px"
                    width="85%"
                >
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart width={1000} height={300} data={chartData}>
                            <XAxis/>
                            <YAxis/>
                            <TooltipChart/>
                            <CartesianGrid stroke="rgba(238, 238, 238, 0.46)" strokeDasharray="7 7"/>
                            <Line type="monotone" dataKey="value" dot={false} stroke="#8884d8"/>
                        </LineChart>
                    </ResponsiveContainer>
                </Flex>
            </Flex>
        </>
    )
})