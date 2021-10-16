module.exports = {
    name: 'ban',
    description: 'Ban a player',
    options: [
      {
        name: 'user',
        type: 6, //USER Type
        description: 'Name the user you would like to ban from the discord.',
        required: true,
    },
],
execute(interaction, client) {
 const member = interaction.options.get('user').value;
    
  if (!member) {
    return message.reply('You need to mention the user you would like to');
  }

  if (!interaction.member.permissions.has('BAN_MEMBERS')) {
    return message.reply("I am sorry but I cannot ban this member.");
  }

  const userinfo = client.users.cache.get(member);

  return interaction.guild.members
    .ban(member)
    .then(() => {
      interaction.reply({
        content: `${userinfo.username} was banned.`,
        ephemeral: true,
      });
    })
    .catch(error =>
      interaction.reply({
        content: `Error occured`,
        ephemeral: true,
      }),
    );
},
};
