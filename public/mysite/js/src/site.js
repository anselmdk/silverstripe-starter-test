import ExampleClass from './layout/ExampleClass'
import Modal from './components/Modal'

$(function() {
  //new ExampleClass();
  const modal = new Modal('myModal');
  modal.addToBody();
  modal.toggle();
});
