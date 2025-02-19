export default async function DebugComponent() {
	return <pre>{JSON.stringify(process.env, null, 2)}</pre>;
}

export const getConfig = async () => {
	return {
		render: "static",
	};
};
