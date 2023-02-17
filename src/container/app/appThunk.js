import { createAsyncThunk } from "@reduxjs/toolkit";
import ConfigAPI from "@/api/config";

const getConfig = createAsyncThunk(
  'app/config',
  async (param) => {
    const configApi = new ConfigAPI();
    const configData = await configApi.getConfig('configuration', param || {});
    return configData;
  }
)

export { getConfig };