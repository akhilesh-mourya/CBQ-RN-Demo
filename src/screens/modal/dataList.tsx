import React, { FC, useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, ListItem, ListView, Text } from './styles';

type UsersProps = {
  name: string;
  email: string;
  gender: string;
  status: string;
  id: number;
};
export const DataList: FC<{}> = () => {
  const data = useSelector((state) => state.data);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(data?.data);
  }, [data]);

  /*
   * User data cell
   */
  const renderItem = ({ item }: ListRenderItemInfo<UsersProps>) => (
    <ListItem>
      <Text>{item?.name}</Text>
      <Text>{item?.gender}</Text>
      <Text>{item?.email}</Text>
      <Text>{item?.status}</Text>
    </ListItem>
  );

  return (
    <Container>
      <ListView
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item: UsersProps) => item?.id}
      />
    </Container>
  );
};

export default DataList;
