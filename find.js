module.exports.users = function(tExT) {
  const matches = tExT.match(/<@[A-Z0-9]{9}>/g);
  return matches
    ? matches.map((wrapped) => wrapped.replace('<@', '').replace('>', ''))
    : [];
};

module.exports.tacos = function(tExT) {
  const text = tExT.toLowerCase();
  const matches = text.match(/:taco:/g);
  return matches ? matches : [];
};

module.exports.leaderboard = function(tExT) {
  const text = tExT.toLowerCase();
  return Boolean(text.match(/leaderboard/g));
};

module.exports.rain = function(tExT) {
  const text = tExT.toLowerCase();
  return Boolean(text.match(/make it rain/g));
};

module.exports.dance = function(tExT) {
  const text = tExT.toLowerCase();
  return Boolean(text.match(/dance/g));
};

module.exports.goodbot = function(tExT) {
  const text = tExT.toLowerCase();
  return (
    Boolean(text.match(/good bot/g)) ||
    Boolean(text.match(/thanks/g)) ||
    Boolean(text.match(/thank you/g)) ||
    Boolean(text.match(/:niiice:/g))
  );
};

module.exports.badbot = function(tExT) {
  const text = tExT.toLowerCase();
  return (
    Boolean(text.match(/bad bot/g)) || Boolean(text.match(/:oldmanyellsat:/g))
  );
};