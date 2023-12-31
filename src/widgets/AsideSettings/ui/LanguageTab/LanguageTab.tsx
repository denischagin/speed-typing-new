import {Box, Flex, Image, Tooltip} from "@chakra-ui/react";
import ProgrammingLanguageIcon from "@shared/assets/programming-language.svg";
import {useSearchParams} from "react-router-dom";
import {LanguageTabProps} from "src/widgets/AsideSettings";
import {searchParamsEnum} from "@shared/constants";
import {useGetProgrammingLanguages} from "@entities/code";

export const LanguageTab = (props: LanguageTabProps) => {
    const {handleClosePanel} = props

    // const {languageName} = useParams()
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {
        data: programmingLanguages,
    } = useGetProgrammingLanguages()

    const currentCodeIcon = programmingLanguages?.find((language) =>
        language.name === languageName
    )?.logo

    return (
        <Flex justify="center">
            <Tooltip label={languageName ? `Current language: ${languageName}` : "Select language"}>
                <Box
                    as="button"
                    bg={"whiteAlpha.100"}
                    p="5px"
                    borderRadius="5px"
                    onClick={handleClosePanel}
                >
                    <Image
                        w="50px"
                        src={currentCodeIcon ? currentCodeIcon : ProgrammingLanguageIcon}
                    />
                </Box>
            </Tooltip>
        </Flex>
    )
}