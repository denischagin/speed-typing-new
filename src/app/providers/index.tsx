import {ReactNode} from "react"

import {ChakraProvider} from "@chakra-ui/react"

import {RouterProvider} from "react-router-dom";

import {queryClient} from "@app/config";
import {ViewerProvider} from "@entities/viewer";
import {useCurrentTheme} from "@features/theme";
import {router} from "@pages/index.tsx";
import {QueryClientProvider} from "@tanstack/react-query";

export const Providers = ({children}: { children?: ReactNode }) => {
    const theme = useCurrentTheme()

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ViewerProvider>
                    <RouterProvider router={router}/>
                    {children}
                </ViewerProvider>
            </ChakraProvider>
        </QueryClientProvider>
    )
}