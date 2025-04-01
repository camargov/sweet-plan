"use client";
import { createContext, useState, ReactNode, useContext } from "react";

type GlobalStateProps = {
	modalOpen?: boolean;
};

type GlobalContextType = {
	globalState: GlobalStateProps;
	updateGlobalState: (stateChanges: GlobalStateProps) => void;
};

const GlobalContext = createContext<GlobalContextType>({
	globalState: {},
	updateGlobalState: () => {},
});

export const GlobalContextProvider = (props: { children: ReactNode }) => {
	const { children } = props;
	const [globalState, setGlobalState] = useState<GlobalStateProps>({
		modalOpen: false,
	});

	const updateGlobalState = (stateChanges: GlobalStateProps) => {
		setGlobalState((prev) => {
			return { ...prev, ...stateChanges };
		});
	};

	return (
		<GlobalContext.Provider value={{ globalState, updateGlobalState }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
