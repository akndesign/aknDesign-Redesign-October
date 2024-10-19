import { client } from './sanity'; // Adjust the import according to your setup
import { QueryParams } from 'next-sanity';

export const getDataWithQuery = async (query: string) => {
	const data = await client.fetch(query, { revalidate: 10 } as QueryParams);
	return data;
};

export interface getDataProps {
	slug: string;
	type: string;
}

export const getData = async ({ slug, type }: getDataProps) => {
	const query = `*[_type == "${type}" && slug.current == "${slug}"][0]`;
	const data = await client.fetch(query, { revalidate: 10 } as QueryParams);
	return data;
};
