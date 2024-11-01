import axios from 'axios';
import { z } from 'zod';
import { SourceInput } from '../types/types';

const sourceSchema = z.object({
  'id': z.number(),
  'hostname': z.string(),
  'port': z.number(),
  'user': z.string(),
  'dbname': z.string(),
  'server.name': z.string(),
});

const sourceSchemaArray = z.array(sourceSchema);

const baseUrl = "http://localhost:3001/sources"

const getSources = async () => {
  const res = await axios.get(baseUrl);
  console.log(res)
  return sourceSchemaArray.parse(res.data);
};

const createSource = async (sourceInfo: SourceInput) => {
  console.log(sourceInfo);
  const res = await axios.post(baseUrl + '/new_source', sourceInfo);
  return res.data;
}

export {
  getSources,
  createSource
};