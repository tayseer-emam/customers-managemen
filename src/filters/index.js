import Vue from 'vue';

Vue.filter('date', function(value) {
  if (!value) return '-';
  const date = new Date(value);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en', options).format(date);
});
