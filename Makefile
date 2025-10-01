# Nome do tópico deve ser passado assim:
# make topic name=variaveis category=fundamentos

# Criação de um novo tópico
topic:
	@if [ -z "$(name)" ]; then \
		echo "❌ ERRO: informe o nome do tópico com 'make topic name=nome category=categoria'"; \
		exit 1; \
	fi
	@if [ -z "$(category)" ]; then \
		echo "❌ ERRO: informe a categoria com 'make topic name=nome category=categoria'"; \
		exit 1; \
	fi
	@mkdir -p $(category)/$(name)
	@echo "# $(name:%.md=%)" > $(category)/$(name)/$(name).md
	@echo "// Exemplos de $(name)" > $(category)/$(name)/exemplos.js
	@echo "✅ Tópico '$(name)' criado em '$(category)/$(name)'"

# Listar tópicos já criados
list:
	@echo "📂 Estrutura de tópicos:"
	@if command -v tree >/dev/null 2>&1; then \
		tree -d -L 2; \
	else \
		find . -maxdepth 2 -type d | sed 's|^\./||' | sort; \
	fi
