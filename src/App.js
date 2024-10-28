import React from 'react';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Button from './components/Button';
import Family from './components/Family';
import IconWithLabel from './components/IconWithLabel';
import ProductCard from './components/ProductCard';
import ThemedContainer from './components/ThemedContainer';
import Avatar from './components/Avatar';
import PageTitle from './components/PageTitle';
import IconCard from './components/IconCard';
import Section from './components/Section';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import List from './components/List';
import Footer from './components/Footer';
import Header from './components/Header';
import IconButton from './components/IconButton';
import Tabs from './components/Tabs';
import Badge from './components/Badge';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <Greeting name="Світ" />
      
      <Card>
        <p>Це вміст картки</p>
      </Card>

      <Button label="Натисни мене" />

      
      <Family members={["Олексій", "Марія"]} />
    
      <IconWithLabel icon="⭐" label="Оцінка" />

      <ProductCard 
        title="Продукт 1" 
        price="200 грн" 
        description="Опис продукту" 
      />

      <ThemedContainer theme="dark">
        <p>Темний режим</p>
      </ThemedContainer>

      <Avatar 
        imageUrl="https://via.placeholder.com/150" 
        alt="Аватар користувача" 
      />

      <PageTitle title="Головна сторінка" />

      <IconCard icon="💡" title="Ідея">
        <p>Тут розміщено додатковий вміст картки з іконкою.</p>
      </IconCard>

      <Section title="Розділ 1">
        <p>Це вміст розділу.</p>
      </Section>

      <NavBar links={['Головна', 'Про нас', 'Контакти']} />

      <Modal isOpen={true}>
        <p>Це модальне вікно.</p>
      </Modal>

      <List>
        <li>Елемент списку 1</li>
        <li>Елемент списку 2</li>
      </List>

      <Footer text="Це нижній колонтитул сторінки" />

      <Header title="Заголовок" subtitle="Підзаголовок" />

      <IconButton icon="🔍" onClick={() => alert('Пошук активовано!')} />

      <Tabs>
        <div label="Вкладка 1">Контент вкладки 1</div>
        <div label="Вкладка 2">Контент вкладки 2</div>
      </Tabs>

      <Badge count={5}>
        <p>Елемент з баджем</p>
      </Badge>

      <UserCard username="john_doe" email="john@example.com">
        <Button label="Зв'язатися" />
      </UserCard>
    </div>
  );
}

export default App;
