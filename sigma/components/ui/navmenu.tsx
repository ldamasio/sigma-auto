import * as React from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navigationData = [
  {
    title: 'Veículos',
    actions: [
      { label: 'Adicionar Veículo', href: '/veiculos/adicionar' },
      { label: 'Buscar Veículo', href: '/veiculos/buscar' },
    ],
  },
  {
    title: 'Operações',
    actions: [
      { label: 'Adicionar Operação', href: '/operacoes/adicionar' },
      { label: 'Buscar Operação', href: '/operacoes/buscar' },
    ],
  },
  {
    title: 'Pedidos',
    actions: [
      { label: 'Adicionar Pedido', href: '/pedidos/adicionar' },
      { label: 'Buscar Pedido', href: '/pedidos/buscar' },
    ],
  },
  {
    title: 'Clientes',
    actions: [
      { label: 'Adicionar Cliente', href: '/clientes/adicionar' },
      { label: 'Buscar Cliente', href: '/clientes/buscar' },
    ],
  },
  {
    title: 'Vendedores',
    actions: [
      { label: 'Adicionar Vendedor', href: '/vendedor/adicionar' },
      { label: 'Buscar Vendedor', href: '/vendedor/buscar' },
    ],
  },
  {
    title: 'Montadoras',
    actions: [
      { label: 'Adicionar Montadora', href: '/montadoras/adicionar' },
      { label: 'Buscar Montadora', href: '/montadoras/buscar' },
    ],
  },
];

const generateLink = (href: string): string => href; // Se você estiver usando Next.js, pode simplificar assim

export function NavMenu() {
  return (
    <NavigationMenu className="nav-menu dark">
      <NavigationMenuList>
        {navigationData.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-4">
                {item.actions.map((action) => (
                  <li key={action.label}>
                    <Link href={generateLink(action.href)} passHref>
                      <NavigationMenuLink>{action.label}</NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}