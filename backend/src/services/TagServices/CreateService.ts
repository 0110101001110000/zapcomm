import * as Yup from "yup";

import AppError from "../../errors/AppError";
import Tag from "../../models/Tag";
import { logger } from "../../utils/logger";

interface Request {
  name: string;
  color: string;
  kanban: number;
  companyId: number;
}

const CreateService = async ({
  name,
  color = "#A4CCCC",
  kanban = 0,
  companyId
}: Request): Promise<Tag> => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("O nome da tag é obrigatório")
      .min(3, "O nome da tag deve ter pelo menos 3 caracteres"),
    kanban: Yup.number()
      .integer("O valor de kanban deve ser um número inteiro")
      .oneOf([0, 1], "O valor de kanban deve ser 0 ou 1"),
    companyId: Yup.number()
      .required("O ID da empresa é obrigatório")
      .positive("O ID da empresa deve ser um número positivo")
      .integer("O ID da empresa deve ser um número inteiro")
  });

  try {
    await schema.validate({ name, color, kanban, companyId }, { abortEarly: false });
    
    const [tag] = await Tag.findOrCreate({
      where: { name, color, companyId, kanban },
      defaults: { name, color, companyId, kanban }
    });
  
    await tag.reload();
  
    logger.info(`Tag criada ou encontrada com sucesso: ${tag.name} empresa ID ${companyId}`);

    return tag;
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      throw new AppError(`Erro de validação: ${err.errors.join(", ")}`, 400);
    }

    throw new AppError("Erro interno ao criar ou buscar tag", 500);
  }  
};

export default CreateService;
