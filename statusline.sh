#!/usr/bin/env bash
# Claude Code status line script
# Shows: model display name | 20-char context progress bar | used% | remaining%

input=$(cat)

model=$(echo "$input" | jq -r '.model.display_name // "Unknown Model"')
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

if [ -n "$used" ]; then
  used_int=$(printf "%.0f" "$used")
  remaining_int=$(( 100 - used_int ))
  filled=$(( used_int / 5 ))
  empty=$(( 20 - filled ))
  bar=""
  for i in $(seq 1 $filled); do bar="${bar}█"; done
  for i in $(seq 1 $empty); do bar="${bar}░"; done
  printf "\033[0;36m%s\033[0m  \033[0;33m[%s]\033[0m \033[0;32m%s%%\033[0m used \033[0;90m%s%%\033[0m left" \
    "$model" "$bar" "$used_int" "$remaining_int"
else
  printf "\033[0;36m%s\033[0m  \033[0;90m[context pending]\033[0m" "$model"
fi
