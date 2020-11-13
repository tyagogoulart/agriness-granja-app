export const statusAnimal = (status: number): string => {
  const statusLabels: any = {
    0: 'ATIVO',
    1: 'INATIVO',
    2: 'VENDIDO',
    3: 'DESCARTADO',
  };
  return statusLabels[status];
};

export const statusIcon = (status: number) => {
  const statusIcons: any = {
    0: 'check-circle',
    1: 'minus-circle',
    2: 'donate',
    3: 'times',
  };

  return statusIcons[status];
};
