import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'skyblue',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Inicio',
          title: 'INICIO',
        }}
      />
      <Drawer.Screen
        name="explore" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Nosotros',
          title: 'NOSOTROS',
        }}
      />
      <Drawer.Screen
        name="crud" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Crud',
          title: 'CRUD',
        }}
      />
    </Drawer>
  );
}
