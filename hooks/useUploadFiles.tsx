import { useMutation } from 'react-query';
import { post } from '../pages/lib/api';

export function useUploadFiles() {
 const {
  mutate: onSubmit,
  data: returnDataUpload,
  error: errosUpload,
  isLoading: isLoadingUpload
 } = useMutation((data: any) => post('/data', data));

 return { onSubmit, returnDataUpload, errosUpload, isLoadingUpload };
}
