import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IdParameter from '../features/airplanes/IdParameter';
import { DataFetchDefault } from './DataFetchDefault';
import IDataFetch from './IDataFetch';

export default function useDataFetch<T>(baseUrl: string, fetchDefault: DataFetchDefault = DataFetchDefault.GetAll): [Array<T>, IDataFetch<T>] {
	const [entities, setEntities] = useState<Array<T>>([]);
	const param = useParams<IdParameter>();

	const GetEntities = useCallback((): void => {
		axios.get<Array<T>>(baseUrl).then((response) => {
			setEntities(response.data);
		});
	}, [baseUrl]);

	const GetById = useCallback(
		(id: string): void => {
			axios.get<T>(`${baseUrl}/${id}`).then((response) => setEntities([response.data]));
		},
		[baseUrl]
	);

	useEffect(() => {
		switch (fetchDefault) {
			case DataFetchDefault.GetAll:
				GetEntities();
				break;
			case DataFetchDefault.GetById:
				GetById(param.id);
				break;
			case DataFetchDefault.Search:
				break;
		}
	}, [baseUrl, GetEntities, GetById, fetchDefault, param.id]);

	const AddEntity = (entity: T): void => {
		axios.post(baseUrl, entity).then(() => GetEntities());
	};

	const RemoveEntity = (id: string): void => {
		axios.delete(`${baseUrl}/${id}`).then(() => GetEntities());
	};

	return [entities, { AddEntity: AddEntity, RemoveEntity: RemoveEntity, GetById: GetById }];
}
