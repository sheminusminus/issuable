export const formatRepos = data => data.reduce((obj, item) => ({
  ...obj,
  [item.id]: item,
}), {});

export const formatIssues = data => data.reduce((obj, item) => ({
  ...obj,
  [item.id]: {
    assigneeAvatar: item.assignee ? item.assignee.avatar_url : '',
    title: item.title,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  },
}), {});
